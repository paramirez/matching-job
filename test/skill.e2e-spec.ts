import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { skillsStore } from '../src/infrastructure/data-services/in-memory/store/skills';

describe('Skill (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/skill should return JSON data with skills id and name', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/skill')
      .expect(200);

    console.log(response.body)

    expect(response.body).toEqual({ data: skillsStore });
  });

  it('/api/skill/17c6ee1a-2a74-4ae2-b5fe-90a2a560894e should return JSON data with Typescript skill record', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/skill/17c6ee1a-2a74-4ae2-b5fe-90a2a560894e')
      .expect(200);

    expect(response.body).toEqual({
      data: { id: '17c6ee1a-2a74-4ae2-b5fe-90a2a560894e', name: 'Typescript' }
    });
  });
});
