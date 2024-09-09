import { Test, TestingModule } from '@nestjs/testing';
import { TemporadaController } from './temporada.controller';
import { TemporadaService } from './temporada.service';

describe('TemporadaController', () => {
  let controller: TemporadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemporadaController],
      providers: [TemporadaService],
    }).compile();

    controller = module.get<TemporadaController>(TemporadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
