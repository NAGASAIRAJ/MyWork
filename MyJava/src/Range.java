class Range
{
    public static void main(String [] args)
    {
        int a=10,b=30,i=0,r=0,c=0,d=0,x=0,y=0;
        for(i=a;i<=b;i++)
        {
            x=i;
            while(x!=0)
            {
                r=x%2;
                if(r==0)
                {
                    c++;
                }
                x/=10;
            }
            y=i;
            while(y!=0)
            {
                y=y/10;
                d++;
            }
            if(c==d)
                System.out.print(i+" ");
        }
        System.out.println();
    }
}