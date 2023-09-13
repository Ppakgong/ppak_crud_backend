import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardType } from './entity/board.entity';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create_board.dto';

@Injectable()
export class BoardService {
  boards: BoardType[] = [];

  getAllBoards() {
    return this.boards;
  }

  getBoardById({ id }: { id: string }) {
    const found = this.boards.find((board) => board.id === id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  createBoard({ title, content }: CreateBoardDto): BoardType {
    const nextId = uuid();
    const board: BoardType = {
      id: nextId,
      title,
      content,
      created_at: new Date(),
    };
    this.boards.push(board);
    return board;
  }

  deleteBoard({ id }: { id: string }): void {
    this.boards.filter((board) => board.id !== id);
  }
}
