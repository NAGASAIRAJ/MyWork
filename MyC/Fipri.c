#include

void fibo(int);

void prime(int);

main()

{

int n,e;

scanf("%d",&n);

e=n/2;

if(n%2==0)

prime(e);

else

fibo(e+1);

}

void prime(int n)

{

int i,j,no,flag=0,count=0;

 for(i=1;i<=100;i++)

  {

flag=0;

      for(j=2;j<=i/2;j++)

      {

if(i%j==0)

flag=0;

else

flag=1;

        }

  if(flag==1)

   count++;

   if(count==n)

       {

           printf("%d\n",i);

           break;

       }

   }

}

void fibo(int n)

{

 int n0=0,n1=1,n2,i;

for(i=3;i<=n;i++)

{

   n2=n0+n1;

   n0=n1;

   n1=n2;

}

printf("%d",n2);

}

