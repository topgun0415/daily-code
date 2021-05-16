
 public class Egoingproject7fix {
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
		double Divdend2 = getdividend2();
		double Divdend3 = getdividend3();
		 
		 
		accountings();
	  
  }

	public static void accountings() {
		System.out.println("Value of supply = " + ValueofSupply);
		System.out.println("VAT = " + getVAT());
		System.out.println("Total = " + total());
		System.out.println("Expenserate = " + getExpense());
		System.out.println("Income = " + getincome());
		System.out.println("Divdend(1) = " + getdividend1());
		System.out.println("Divdend(2) = " + getdividend2());
		System.out.println("Divdend(3) = " + getdividend3( ));
	}

	private static double getincome() {
		return ValueofSupply - getExpense();
	}
	private static double getdividend1() {
		return getincome() * 0.5;
	}
	private static double getdividend2() {
		return getincome() * 0.3;
	}
	private static double getdividend3() {
		return getincome() * 0.2;
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
