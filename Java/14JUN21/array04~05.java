
public class originJava30 {

	public static void main(String[] args) {
		
	// 배열의 길이
	// 배열이름.length - 배열의 길이 (int형 상수)
		
		int [] score = new int [11];
		System.out.println("score length = " + score.length);
		
		for (int i = 0; i <= score.length; i++)   // 배열 바운더리를 초과하여 입력하는 실수를 많이 하기 때문에 모든 변수를 안바꿔도 되는 score.length를 사용하는 경우가 많음
		{
			System.out.println("score ["+i+"] = " + score[i]);	
		}
		
		System.out.println("-----------------------------");
		
		
		// 배열의 초기화
		
		int [] point = new int [5];
		
		point[0] = 10;
		point[1] = 20;
		point[2] = 30;   // =  for (int i = 0; i <= point.length; i++)
		point[3] = 40;   //     { point[i] = i * 10 + 10;
		point[4] = 50;
		
		// 이걸 간단하게 하기 위해서 더 간단한 식이 있다
	    
	    int [] point { 10, 20 , 30, 40, 50 };
	    

		
		
		
		}
	
     }
	

