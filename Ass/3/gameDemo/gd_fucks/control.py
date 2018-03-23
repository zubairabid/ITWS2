from ship import Ship
from alien import Alien
from missile import Missile
from timebomb import Timebomb
from random import randint
import globalset as gs

class Control:

    def __init__(self, stdscr):
        # setup the game screen
        self.sess = gs.GSet();
        self.scr = stdscr
        # setup initial ship space
        self.x = 7
        self.y = 4
        self.sess.screen[7][4] = Ship(7, 4)

    def draw(self):
        # Drawing the board
        for i in range(8):
            for j in range(8):
                if(self.sess.screen[i][j] != None):
                    self.scr.addstr(gs.ROW_OF + i * gs.ROW_H, gs.COL_OF + j * gs.COL_W, str(self.sess.screen[i][j].txt))
                else:
                    self.scr.addstr(gs.ROW_OF + i * gs.ROW_H, gs.COL_OF + j * gs.COL_W, gs.none)

        # Drawing score
        self.scr.addstr(9 * gs.ROW_H, gs.ROW_OF, ("Player Score : " + str(self.sess.score)))
        self.scr.addstr(10 * gs.ROW_H, gs.ROW_OF, ("Time spent: {}".format(gs.tm)))
        # Time display too
    def keyIn(self, c):
        if(c == ord('a') or c == ord('A')):
            self.move("left")
        if(c == ord('d') or c == ord('D')):
            self.move("right")
        if(c == ord('s') or c == ord('S')):
            self.move("2")
        if(c == ord('w')):
            self.move("1")

    def move(self, instruction):
        pship = self.sess.screen[self.x][self.y]
        if(instruction == 'left'):
            self.x, self.y = pship.move('left', self.sess) # should update the screen too

        if(instruction == 'right'):
            self.x, self.y = pship.move('right', self.sess)

        if(instruction == '1'):
            msl = Missile(pship)
            self.sess.screen[msl.x][msl.y] = msl
            self.sess.misslist.append(msl)
            msl.move(self.sess)

        if(instruction == '2'):
            msl = Timebomb(pship)
            self.sess.screen[msl.x][msl.y] = msl
            self.sess.misslist.append(msl)
            msl.move(self.sess)



    # deals with deletions from list on its own
    def refreshMissile(self):
        # for i in range(len(self.sess.misslist)):
        #     temp = self.ess.misslist[i].move()
        #     if(temp == 1):
        #         self.sess.misslist.(i)
        for missile in self.sess.misslist:
            if(missile.move(self.sess) == 1):
                self.sess.misslist.remove(missile)


    # delegates deletions from list to the object
    def refreshAlien(self):
        for al in self.sess.alist:
            al.update(self.sess)

    def genAlien(self):
        x = randint(0, 1)
        y = randint(0, 7)
        while(self.sess.screen[x][y] != None):
            x = randint(0, 1)
            y = randint(0, 7)

        self.sess.screen[x][y] = Alien(x, y)
        self.sess.alist.append(self.sess.screen[x][y])
