
public class Egoingproject2 {
	public static void main(String[] args) {
		
		
		//변수도입 : 코딩을 획기적으로 줄일 수 있고, 하나의 변수만 변경해주면 모든 식이 따라 바뀐다. 활용 가능성이 무궁무진함.
		
		double ValueofSupply = 10000.0;
		double VatRate = 0.1;
		double Expenserate = 0.3;
		double VAT = ValueofSupply * VatRate;
		double Total = ValueofSupply + VAT;
		double Expense = ValueofSupply * Expenserate;
		double Income = ValueofSupply - Expense;
		double Divdend1 = Income * 0.5;
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

}
