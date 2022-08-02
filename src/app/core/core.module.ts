import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageMainModule } from './page-main/page-main.module';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PageMainModule,
  ],
  exports: [PageMainModule],
  declarations: [],
  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ) {
    super(parentModule);
  }
}
