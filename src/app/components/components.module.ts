import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core'
import {NotUsedComponent} from './not-used.component';
import {UsedComponent} from './used.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        UsedComponent,
        NotUsedComponent,
    ],
    exports: [
        UsedComponent,
        NotUsedComponent,
    ],
})
export class ComponentsModule {
}
