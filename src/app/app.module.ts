import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './root/app.component';

@NgModule({
    imports: [
        BrowserModule,

        ComponentsModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
