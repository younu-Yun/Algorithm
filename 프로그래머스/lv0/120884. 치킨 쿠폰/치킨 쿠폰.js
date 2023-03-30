function solution(chicken) {
    var answer = 0;
    
    //1. 한마리당 쿠폰 1개 
    //2. 쿠폰10개 → 서비스쿠폰 1개 서비스쿠폰사용한 치킨에도 쿠폰 1장
    //3. 최대서비스 치킨의 수 구하기
    
    let service_C = 0;
    let coupon = chicken;
    
    while(coupon >= 10){
        service_C += Math.floor(coupon / 10);
        
        coupon = Math.floor(coupon / 10) + (coupon % 10);
        
    }
    
    
    
    
    return service_C;
}