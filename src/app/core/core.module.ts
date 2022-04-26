/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* own custom services */

@NgModule({
  declarations: [],
  imports: [
    /* 3rd party libraries */
    HttpClientModule
  ],
  providers: [
    /* own custom services */
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported by one NgModule - the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in app module');
    }
  }
}
