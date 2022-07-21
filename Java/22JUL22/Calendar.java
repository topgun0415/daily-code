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
