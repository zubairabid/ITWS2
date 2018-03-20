import curses
from curses import wrapper
import time

def main(stdscr):
    # Make stdscr.getch non-blocking
    stdscr.nodelay(True)
    curses.curs_set(0)
    stdscr.clear()

    stdscr.resize(24, 80)
    while True:
        c = stdscr.getch()
        if(c == -1):
            c = ord('A');
        # Clear out anything else the user has typed in
        curses.flushinp()
        stdscr.clear() # also repaints

        # stdscr.border([0[, 0[, 0[, 0[, 0[, 0[, 0[, 0]]]]]]]])
        # stdscr.border('|','|','-','-','/','\\','\\','/')
        stdscr.border(0, 0, 0, 0, 0, 0, 0, 0)

        stdscr.resize(24, 80)
        # Wait 1/10 of a second. Read below to learn about how to avoid
        # problems with using time.sleep with getch!
        time.sleep(0.1)

# wrapper is a function that does all of the setup and teardown, and makes sure
# your program cleans up properly if it errors!
wrapper(main)
