import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;

    // 존재하는 이메일인지 검사
    const isCatExist = await this.catsRepository.existsByEmail(email);
    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // cat생성
    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
