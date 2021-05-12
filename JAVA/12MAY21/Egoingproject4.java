
public class Egoingproject4 {
  public static void main(String[] args) {
	
	  // Learn if 
	  
	    double ValueofSupply = Double.parseDouble(args[0]);
		double VatRate = 0.1;
		double Expenserate = 0.3;
		double VAT = ValueofSupply * VatRate;
		double Total = ValueofSupply + VAT;
		double Expense = ValueofSupply * Expenserate;
		double Income = ValueofSupply - Expense;
	
		double Divdend1;
		double Divdend2;
		double Divdend3;
		
		
		if ( Income >10000.0) { 
		Divdend1 = Income * 0.5;
		 Divdend2 = Income * 0.3;
		Divdend3 = Income * 0.2;
		}  else {
		Divdend1 = Income * 1.0;
		Divdend2 = Income * 0;
		Divdend3 = Income * 0;
		}
		
		
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
