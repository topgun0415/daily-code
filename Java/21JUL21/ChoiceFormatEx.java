import java.text.ChoiceFormat;

public class Main {
	public static void main (String [] args) {
		
		// ChoiceFormat 은 특정 범위에 속하는 값을 문자열로 변환해준다. 연속적 또는 불연속적인 범위의 값들을 처리하는데 있어서 if문이나 switch문은 적절하지 못한 경우가 많다
		
		
		double [] score = { 60 , 70 , 80 , 90 };
		String [] grade = { "D" , "C" , "B" , "A" };
		int [] testscore = { 100 , 95 , 90 , 85 , 80 , 75 , 70 , 65 , 60 };
		
		ChoiceFormat ch = new ChoiceFormat (score, grade);
		
		for (int i = 0; i < testscore.length; i++) {
				
				System.out.println(testscore[i] + ":" + ch.format(testscore[i]));
				
		}
		
	}
	
}


 

