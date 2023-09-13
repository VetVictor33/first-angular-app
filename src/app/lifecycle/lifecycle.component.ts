import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.sass']
})
export class LifecycleComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() public littleNumber: number = 0;


  public littleNumberPlusPlus() {
    this.littleNumber++
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChange`)
    console.log(changes)
  }
  public ngOnInit(): void {
    console.log("OnInit")
  }
  public ngDoCheck(): void {
    console.log("DoCheck")
  }
  public ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  public ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  public ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  public ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
  public ngOnDestroy(): void {
    console.log("OnDestroy")
  }

}
