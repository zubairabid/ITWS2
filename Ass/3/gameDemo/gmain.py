import curses
from curses import wrapper
import time
from control import Control

def main(stdscr):

    CLOCK_CYCLE = 0.1
    t = 0
    s = Control(stdscr)

    stdscr.nodelay(True)
    curses.curs_set(0)
    stdscr.resize(24, 80)
    stdscr.clear()
    stdscr.border(0, 0, 0, 0, 0, 0, 0, 0)

    while(True):
        c = stdscr.getch()
        curses.flushinp()
        stdscr.clear()

        # Game preprocessing logic: make aliens, etc
        t = (t + CLOCK_CYCLE)%10
        s.refreshAlien()
        if(t <= CLOCK_CYCLE):
            s.genAlien()

        # draw board
        s.draw(t)

        # deal with input
        if(c == ord('q')):
            return
        s.keyIn(c)

        stdscr.border(0, 0, 0, 0, 0, 0, 0, 0)
        stdscr.resize(24, 80)
        time.sleep(CLOCK_CYCLE)

wrapper(main)
