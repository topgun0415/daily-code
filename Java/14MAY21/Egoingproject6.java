
public class Egoingproject6 {
 public static void main(String[] args) {
	
	 
	    // Learning ArrayLoop App..
	 
	    double ValueofSupply = Double.parseDouble(args[0]);
		double VatRate = 0.1;
		double Expenserate = 0.3;
		double VAT = ValueofSupply * VatRate;
		double Total = ValueofSupply + VAT;
		double Expense = ValueofSupply * Expenserate;
		double Income = ValueofSupply - Expense;

		
		System.out.println("Value of supply = " + ValueofSupply);
		System.out.println("VAT = " + VAT);
		System.out.println("Total = " + Total);
		System.out.println("Expenserate = " + Expense);
		System.out.println("Income = " + Income);
		 
		
		double [] DivdendRates = new double[3];
		DivdendRates [0] = 0.5;
		DivdendRates [1] = 0.3;
		DivdendRates [2] = 0.2;
		
		double Divdend1 = Income * DivdendRates [0];
		double Divdend2 = Income * DivdendRates [1];
		double Divdend3 = Income * DivdendRates [2];
	
		
		int i = 0;
		while(  i < DivdendRates.length) {
		System.out.println("Divdend  = " + ( Income * DivdendRates[i]) );
		i = i + 1;
		}
		
		//아직 이해가 제대로 되지 않음. 
		 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
}
