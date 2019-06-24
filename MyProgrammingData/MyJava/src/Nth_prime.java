class Nth_prime
{
	public static void main(String [] args)
	{
		int i=0,n=20,j=0;
		for(i=13;i<=n;i++)
		{
			if(npr(i))
				System.out.print(i+" ");
			else
				System.out.print("");
		}
		System.out.println("");
		//System.out.println("Hello, this is Thrymr Employee");
	}
	
	public static boolean npr(int n)
	{
		int i=0,j=0,c=0;
		for(i=2;i<=n/2;i++)
		{
			if(n%i==0)
			{
				c++;
				break;
			}
		}
		if(c==0)
			return true;
		else
			return false;
	}
}