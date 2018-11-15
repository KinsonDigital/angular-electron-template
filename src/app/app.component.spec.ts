import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { TranslateModule } from "@ngx-translate/core";
import { ElectronService } from "./providers/electron.service";

describe("AppComponent", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			providers: [
				ElectronService
			],
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot()
			]
		}).compileComponents();
	}));

	it("should create the app", async(() => {
		const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const app: any = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});

class TranslateServiceStub {
	public setDefaultLang(lang: string): void {
	}
}
