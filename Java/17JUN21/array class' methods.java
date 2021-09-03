import java.util.*;
public class originJava30 {

	public static void main(String[] args) {
	
		// Arrays로 배열 다루기
		
    // 배열의 출력방법
		int [ ] arr = { 0, 2, 4, 6, 8 };
		int [ ] [ ] arr2D =
		{
				{ 1, 11 },
				{ 2, 22 },
		};
		
		System.out.println(Arrays.toString(arr));  // 1차원 배열 
		System.out.println(Arrays.deepToString(arr2D)); // 2차원 이상 배열
		
		
		String [ ] str = { "1", "2", "3", "4", "5" };
		String [ ] str1 = { "1", "3,", "5" };
		String [ ] [ ] arr2D1= 
		{
				{ "1", "11" },
				{ "2", "22" },
				
		};
		String [ ] [ ] arr2D2= 
		{
					{ "1", "11" },
					{ "2", "22" },
					
		};
		
    // 배열의 값 비교
		
    System.out.println(Arrays.equals(str, str1)); // 문자열 1차원 배열 값 비교  (문자열은 str  == str1 불가)   
		System.out.println(Arrays.deepEquals(arr2D1, arr2D2)); // 2차원 이상 배열 값 비교 
		
		
		// 배열의 복사
		
		int [ ] arr3 = { 0, 1, 2, 3, 4, 5 };
		int [ ] arr4 = Arrays.copyOf(arr3, 6);  // Arrays.copyOf(배열변수 이름, Arrays.legnth)
		int [ ] arr5 = Arrays.copyOfRange(arr4, 0, 5);  // Arrays.copyOf(배열변수 이름, Arrays.legnth from, Arrays.length to)
		System.out.println(Arrays.toString(arr4));
		System.out.println(Arrays.toString(arr5));
		
		// 배열의 정렬
		
		int [ ] arr6 = { 7, 2, 5, 2, 1 };
		System.out.println(Arrays.toString(arr6));
		Arrays.sort(arr6);
		System.out.println(Arrays.toString(arr6));
		
		
	}
	
 }
	


