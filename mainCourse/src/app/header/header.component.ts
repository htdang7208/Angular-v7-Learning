import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    numbersObsSubscription: Subscription;
    customObsSubscription: Subscription;

    ngOnInit() {
        const secondsCouter = interval(1000);
        this.numbersObsSubscription = secondsCouter.subscribe((n: number) => console.log(n));
        
        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('first package');
            }, 2000);
            setTimeout(() => {
                observer.next('second package');
            }, 4000);
            setTimeout(() => {
                // observer.error('this does not work');
                observer.complete();
            }, 5000);
            setTimeout(() => {
                observer.next('third package');
            }, 6000);
        });

        this.customObsSubscription = myObservable.subscribe(
            (data: string) => console.log(data),
            (error: string) => console.log(error),
            () => console.log('this completed')
        );
    }

    ngOnDestroy() {
        this.numbersObsSubscription.unsubscribe();
        this.customObsSubscription.unsubscribe();
    }
}