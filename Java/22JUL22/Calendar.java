public class Calendar {
  public static void main(String[] args) {
    
   int year = 2008;
   int month = 5;
   int dayOfWeek = 0;
   int lastDay = 0;

   java.util.Calendar cal = java.util.Calendar.getInstance();
   cal.set(year, month - 1, 1);
   dayOfWeek = cal.get(java.util.Calendar.DAY_OF_WEEK);
   lastDay = cal.getActualMaximum(cal.DAY_OF_MONTH);
   
   System.out.println(year + "일" + month + "월");
   System.out.println("일 " + "월 " + "화 " + "수 " + "목 " + "금 " + "토 ");
   
   for(int i = 1; i < dayOfWeek; i++) {
    System.out.print("   ");
   }
   
   // for(int i = 1, n = dayOfWeek; i <= lastDay; i++, n++) 방법도 있음 
   for(int i = 1; i <= lastDay; i++) {
    cal.set(year, month - 1, i);
    dayOfWeek = cal.get(java.util.Calendar.DAY_OF_WEEK);

    System.out.print(i + " ");

    if(i < 10) {
      System.out.print(" ");
    }

    if(dayOfWeek == 7) {
      System.out.println("");
    }
   }

  }
}

/* 출력 예시 (콘솔창에는 잘 나옴)
 * 
 * 2008일5월
일 월 화 수 목 금 토 
            1  2  3  
4  5  6  7  8  9  10 
11 12 13 14 15 16 17 
18 19 20 21 22 23 24 
25 26 27 28 29 30 31 
 */