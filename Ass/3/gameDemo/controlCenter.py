
screen = [[None] * 8]*8


def keyInput(ch):
    missile = screen[miss_x][miss_y]
    if(ch == 'q'):
        # exit
        pass
    elif(ch == 'left'):
        miss_x, miss_y = missile.move(ch)
    elif(ch == 'right'):
        miss_x, miss_y = missile.move(ch)
    elif(ch == 'miss1')
        ballistic.fire(miss_x-1, miss_y)
    elif(ch == 'miss2')
        extend.fire(miss_x-1, miss_y)
