from ship import Ship
from alien import Alien
from missile import Missile
from random import randint

class Control:
    def __init__(self, stdscr):
        # setup the game screen
        self.screen = [[None for i in range(8)] for j in range(8)]
        self.stdscr = stdscr
        # setup initial ship space
        self.x = 7
        self.y = 4
        self.screen[7][4] = Ship(7, 4)
        # setup score
        self.score = 0

    def draw(self, t):
        # Drawing the board
        for i in range(8):
            for j in range(8):
                if(self.screen[i][j] != None):
                    self.stdscr.addstr(2+i*2, 2+j*4, str(self.screen[i][j].txt))
                else:
                    self.stdscr.addstr(2+i*2, 2+j*4, ".")

        # Drawing score
        self.stdscr.addstr(18, 2, ("Player Score : " + str(self.score)))
        self.stdscr.addstr(19, 2, ("Time in cycle : " + str(t)))

    def keyIn(self, c):
        if(c == ord('a') or c == ord('A')):
            # print("A in")
            self.score += 1
            self.move("left")
        if(c == ord('d') or c == ord('D')):
            # print("D in")
            self.score -= 1
            self.move("right")
        if(c == ord('s') or c == ord('S')):
            print("S in")
            self.move("2")
        # if(c == SPACE):
        #     pass

    def move(self, instruction):
        pship = self.screen[self.x][self.y]
        if(instruction == 'left'):
            self.x, self.y = pship.move('left', self.screen) # should update the screen too

        if(instruction == 'right'):
            self.x, self.y = pship.move('right', self.screen)

        if(instruction == '2'):
            msl = Missile(pship)
            

        pass

    def refreshAlien(self):
        for i in range(2):
            for j in range(8):
                if(self.screen[i][j] != None):
                    self.screen[i][j].update(self.screen)

    def genAlien(self):
        x = randint(0, 1)
        y = randint(0, 7)
        while(self.screen[x][y] != None):
            x = randint(0, 1)
            y = randint(0, 7)

        self.screen[x][y] = Alien(x, y)

        pass
