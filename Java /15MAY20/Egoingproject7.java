
 public class Egoingproject7 {
	public static  double ValueofSupply ;
	public static double  vatRate;
	public static double expenserate;
	 public static void main(String[] args) {
	
	    ValueofSupply = 10000.0;
		vatRate = 0.1;
		expenserate = 0.3;
		double VAT = getVAT();
		double Total = total();
		double Expense = getExpense();
		double Income =  getincome();
		double Divdend1 = getdividend1();
		double Divdend2 = Income * 0.3;
		double Divdend3 = Income * 0.2;
		 
		 
		System.out.println("Value of supply = " + ValueofSupply);
		System.out.println("VAT = " + VAT);
		System.out.println("Total = " + Total);
		System.out.println("Expenserate = " + Expense);
		System.out.println("Income = " + Income);
		 
	
		System.out.println("Divdend(1) = " + Divdend1 );
		System.out.println("Divdend(2) = " + Divdend2 );
		System.out.println("Divdend(3) = " + Divdend3 );
	  
	  
	  
  }

	private static double getincome() {
		return ValueofSupply - getExpense();
	}

	private static double getdividend1() {
		return Income * 0.5;
	}

	private static double getExpense() {
		return ValueofSupply * getExpense();
	}

	private static double total() {
		return ValueofSupply + getVAT();
	}

	private static double getVAT() {
		return ValueofSupply * vatRate;
	
	}
}
