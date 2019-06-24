#one.py
def func():
    print "FUNC() IN ONE.PY"
def function():
    pass
def function2():
    pass
print "TOP LEVEL IN ONE.PY"
if __name__ == '__main__':
    function2()
    function()
    print 'ONE.PY is being run directly!'
else:
    print 'ONE.PY has been imported!'