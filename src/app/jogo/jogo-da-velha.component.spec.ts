import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoDaVelhaService } from './../shared/jogo-da-velha.service';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;
  let mockJogoDaVelhaService: jasmine.SpyObj<JogoDaVelhaService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('JogoDaVelhaService', [
      'initialize',
      'initialPlay',
      'play',
      'newPlay',
      'showX',
      'showO',
      'showWinning',
    ]);

    await TestBed.configureTestingModule({
      declarations: [JogoDaVelhaComponent],
      providers: [{ provide: JogoDaVelhaService, useValue: spy }],
    }).compileComponents();

    mockJogoDaVelhaService = TestBed.inject(
      JogoDaVelhaService
    ) as jasmine.SpyObj<JogoDaVelhaService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call initialize on ngOnInit', () => {
    component.ngOnInit();
    expect(mockJogoDaVelhaService.initialize).toHaveBeenCalled();
  });

  it('should call initialPlay on service', () => {
    component.initialPlay();
    expect(mockJogoDaVelhaService.initialPlay).toHaveBeenCalled();
  });

  it('should call play on service with given coordinates', () => {
    const posX = 1;
    const posY = 2;
    component.play(posX, posY);
    expect(mockJogoDaVelhaService.play).toHaveBeenCalledWith(posX, posY);
  });

  it('should call newPlay on service', () => {
    component.newPlay();
    expect(mockJogoDaVelhaService.newPlay).toHaveBeenCalled();
  });

  it('should return showX from service', () => {
    const posX = 1;
    const posY = 2;
    mockJogoDaVelhaService.showX.and.returnValue(true);
    expect(component.showX(posX, posY)).toBeTrue();
    mockJogoDaVelhaService.showX.and.returnValue(false);
    expect(component.showX(posX, posY)).toBeFalse();
  });

  it('should return showO from service', () => {
    const posX = 1;
    const posY = 2;
    mockJogoDaVelhaService.showO.and.returnValue(true);
    expect(component.showO(posX, posY)).toBeTrue();
    mockJogoDaVelhaService.showO.and.returnValue(false);
    expect(component.showO(posX, posY)).toBeFalse();
  });

  it('should return showWinning from service', () => {
    const posX = 1;
    const posY = 2;
    mockJogoDaVelhaService.showWinning.and.returnValue(true);
    expect(component.showWinning(posX, posY)).toBeTrue();
    mockJogoDaVelhaService.showWinning.and.returnValue(false);
    expect(component.showWinning(posX, posY)).toBeFalse();
  });
});
