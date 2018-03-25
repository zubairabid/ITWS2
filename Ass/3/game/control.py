from ship import Ship
from alien import Alien
from missile import Missile
from timebomb import Timebomb
from ballistic import Ballistic
from random import randint
import globalset as gs


class Control:

    def __init__(self, stdscr):
        '''Sets up the game space'''

        # setup the game screen
        self.sess = gs.GSet()
        self.scr = stdscr
        # setup initial ship space
        self.x = gs.NROWS - 1
        self.y = gs.NCOLS // 2
        self.sess.screen[self.x][self.y] = Ship(self.x, self.y)

    def draw(self):
        '''Draws the board'''

        # Drawing board
        for i in range(gs.NROWS):
            for j in range(gs.NCOLS):
                row = gs.ROW_OF + i * gs.ROW_H
                col = gs.COL_OF + j * gs.COL_W
                if(self.sess.screen[i][j] != None):
                    self.scr.addstr(row, col, str(self.sess.screen[i][j].txt))
                else:
                    self.scr.addstr(row, col, gs.none)

        # Drawing score
        score = "Player Score : " + str(self.sess.score)
        self.scr.addstr((gs.NROWS + 1) * gs.ROW_H, gs.ROW_OF, score)
        # Time display too
        t = "Time spent: {}".format(gs.tm)
        self.scr.addstr((gs.NROWS + 2) * gs.ROW_H, gs.ROW_OF, t)

        # KEY Draws
        krow = gs.ROW_OF
        kcol = (gs.NCOLS + 3) * gs.COL_W
        self.scr.addstr(krow, kcol, "KEY:")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, gs.ship + ": Ship")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, gs.alien + ": Alien")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, gs.alien_shot + ": Timershot Alien")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, gs.missile + ": Ballistic Missile")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, gs.timeb + ": Timershot Missile")
        krow += 2*gs.ROW_H

        # Instruction Drawing
        self.scr.addstr(krow, kcol, "INSTRUCTIONS:")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, "A to go left, D to go right")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, "<spacebar> to shoot Ballistic missile")
        krow += gs.ROW_H
        self.scr.addstr(krow, kcol, "S to shoot Timershot missile")

    def keyIn(self, c):
        '''Given a key input, redirects instuction to function'''

        if(c == ord('a') or c == ord('A')):
            self.move("left")
        if(c == ord('d') or c == ord('D')):
            self.move("right")
        if(c == ord('s') or c == ord('S')):
            self.move("2")
        if(c == ord(' ')):
            self.move("1")

    def move(self, instruction):
        '''given an instruction type, moves ship or missile as needed'''

        pship = self.sess.screen[self.x][self.y]
        if(instruction == 'left'):
            self.x, self.y = pship.move('left', self.sess)

        if(instruction == 'right'):
            self.x, self.y = pship.move('right', self.sess)

        if(instruction == '1'):
            msl = Ballistic(pship)
            self.sess.screen[msl.x][msl.y] = msl
            self.sess.misslist.append(msl)
            msl.move(self.sess)

        if(instruction == '2'):
            msl = Timebomb(pship)
            self.sess.screen[msl.x][msl.y] = msl
            self.sess.misslist.append(msl)
            msl.move(self.sess)

    def refreshMissile(self):
        '''deals with deletions from list on its own'''

        for missile in self.sess.misslist:
            if(missile.move(self.sess) == 1):
                self.sess.misslist.remove(missile)

    def refreshAlien(self):
        '''delegates deletions from list to the object'''

        for al in self.sess.alist:
            al.update(self.sess)

    def genAlien(self):
        '''generates a new alien at a random unoccupied cell'''

        x = randint(0, 1)
        y = randint(0, gs.NROWS - 1)
        while(self.sess.screen[x][y] != None):
            x = randint(0, 1)
            y = randint(0, 7)

        self.sess.screen[x][y] = Alien(x, y)
        self.sess.alist.append(self.sess.screen[x][y])
