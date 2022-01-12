# 계산기 기능설명
```
말 그대로 계산기
```
---------------------------
### CSS - display 속성
```
대부분의 HTML 요소는 display 속성의 기본값으로 다음 두 가지 값 중 하나의 값을 가진다.

블록(block)
display 속성값이 블록(block)인 요소는 언제나 새로운 라인(line)에서 시작하며, 해당 라인의 모든 너비를 차지한다.
예시) <div>, <h1>, <p>, <ul>, <ol>, <form> 대표적인 블록(block) 요소

2. 인라인(inline)
display 속성값이 인라인(inline)인 요소는 새로운 라인(line)에서 시작하지 않는다.
또한, 요소의 너비도 해당 라인 전체가 아닌 해당 HTML 요소의 내용(content)만큼만 차지한다.
예시) <span>, <a>, <img> 요소는 대표적인 인라인(inline) 요소

HTML 모든 요소는 각각의 기본 display 속성을 가지고 있지만 개발자가 원하는 모양으로 변경 가능
```
## 다음 예제를 보자
```c
<div class="num">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

.num div {
  display: inline-block;
}

대표적인 블록 요소인 <div>태그로  각 줄에 1, 2, 3 차례로 출력되어야하지만 
inline-block 을 이용하여 하나의 라인에 모두 출력 가능
```
