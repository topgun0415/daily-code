import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
  
	  int [ ] [ ] score =
		  {
				  { 100 , 100 , 100 },
				  { 20 , 20, 20 },
				  { 30 , 30, 30 },
				  { 40, 40, 40 },
				  { 50, 50, 50 }
				  
		  };
	  
	  int korTotal = 0, engTotal = 0, mathTotal = 0; // 과목별 총점
	  
	  
	  System.out.println("번호        국어     수학     영어     총점     평균");
	  System.out.println("==================================");

	  
	  for (int i = 0; i < score.length; i++) 
	  {
		  int total = 0; // 총점
		  float average = 0f; // 과목별 평균
		  
		  korTotal += score [i][0];
		  engTotal += score [i][1];
		  mathTotal += score [i][2]; 
		  System.out.printf("%4d%n", i+1);
	
		  for (int j = 0; j < score[i].length; j++)
		  { 
			  total += score [i][j];
			  System.out.printf("%5d", score[i][j]);
		  }   
			  
		  average = total / (float) score[i].length;
		  
	  }
	  
    // Not finished yet 
   
	}
	
 }
	


