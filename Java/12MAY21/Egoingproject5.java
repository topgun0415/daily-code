
public class Egoingproject5 {
 public static void main(String[] args) {
	
	 // Use array to improve system
	 
	    double ValueofSupply = Double.parseDouble(args[0]);
		double VatRate = 0.1;
		double Expenserate = 0.3;
		double VAT = ValueofSupply * VatRate;
		double Total = ValueofSupply + VAT;
		double Expense = ValueofSupply * Expenserate;
		double Income = ValueofSupply - Expense;

		double [] DivdendRates = new double[3];
		DivdendRates [0] = 0.5;
		DivdendRates [1] = 0.3;
		DivdendRates [2] = 0.2;
		
		double Divdend1 = Income * DivdendRates [0];
		double Divdend2 = Income * DivdendRates [1];
		double Divdend3 = Income * DivdendRates [2];
		 
		 
		System.out.println("Value of supply = " + ValueofSupply);
		System.out.println("VAT = " + VAT);
		System.out.println("Total = " + Total);
		System.out.println("Expenserate = " + Expense);
		System.out.println("Income = " + Income);
		 
	
		System.out.println("Divdend(1) = " + Divdend1 );
		System.out.println("Divdend(2) = " + Divdend2 );
		System.out.println("Divdend(3) = " + Divdend3 );
		
	 
	 
	 
	 
	 
 }
}

