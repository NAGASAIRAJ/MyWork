def ev():
    (x,y)=( (int(input('Enter 1st number : '))), (int(input('Enter 2nd number :'))) )
    for i in range(x,y+1):
        (r,c,d)=(0,0,0)
        n=i
        while(n!=0):
            r=n%2
            if(r==0):
                c=c+1
                n=n//10
        m=i
        while(m!=0):
            m=m//10
            d=d+1
        if(c==d):
            print(i)
ev()