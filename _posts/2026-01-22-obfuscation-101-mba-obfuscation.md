---
layout: post
title: "[Obfuscation 101] - MBA Obfuscation"
date: 2026-01-22 09:54:16 +0900
categories: [Rev]
---

<p data-ke-size="size16"><b>MBA 난독화</b>란 무엇일까?</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-origin-width="577" data-origin-height="165"><span data-url="/assets/posts/obfuscation-101-mba-obfuscation/img1.png" data-phocus="/assets/posts/obfuscation-101-mba-obfuscation/img1.png" data-alt="ㅋㅋ 다들 이걸로 많이 알고있을듯"><img src="/assets/posts/obfuscation-101-mba-obfuscation/img1.png" loading="lazy" width="577" height="165" data-origin-width="577" data-origin-height="165"/></span><figcaption>ㅋㅋ 다들 이걸로 많이 알고있을듯</figcaption>
</figure>
</p>
<p data-ke-size="size16">MBA 난독화란, <b>Mixed Boolean-Arithmetic Obfuscation</b>으로 코드의 논리를 분석하기 어렵게 하기 위해</p>
<p data-ke-size="size16">사용되는 기법중 하나이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">간단히 말하자면 우리가 흔히 아는 <b>산술 연산</b>(+, -)과 <b>비트 논리 연산</b>(AND, OR, NOT, XOR)을 복잡하게 뒤섞어</p>
<p data-ke-size="size16">동일한 결과를 내는 <b>아주 긴 수식으로 변환</b>하는 기술이다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size16">예시를 들어보자면 덧셈의 변환에서는</p>
<p data-ke-size="size16">$$ x + y = (x \oplus y) + 2(x \wedge y) $$</p>
<p data-ke-size="size16">$$ x + y = (x \vee y) + (x \wedge y) $$</p>
<p data-ke-size="size16">$$ x + y = 2(x \vee y) - (x \oplus y) $$</p>
<p data-ke-size="size16">위와 같이 나타낼수 있고, 이는 가산기를 구성할때 사용하는 논리와 유사하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">다음으로 뺄셈은</p>
<p data-ke-size="size16">$$ x - y = (x \oplus \neg y) - (2 \neg x \wedge y) - 1 $$</p>
<p data-ke-size="size16">$$ x - y = (x \oplus y) - 2(\neg x \wedge y) $$</p>
<p data-ke-size="size16">같이 나타낼 수 있다. (여기서 $ \neg $은 NOT 연산, $ \wedge $은 AND, $ \vee $은 OR, $ \oplus $은 XOR 연산이다.)</p>
<p data-ke-size="size16">여기서 말하고자 하는 것은 변환식에 대해서 <b>결과가 동일</b>하다는 것이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">실제로 쓰이는 방식은 이를 재귀적으로 중첩하여 식을 거대하게 만들거나</p>
<p data-ke-size="size16">$$ f = (x \oplus ((a \oplus \neg b) - (2 \neg a \wedge b) - 1)) + 2(x \wedge ((a \oplus \neg b) - (2 \neg a \wedge b) - 1)) $$</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>이는 $x + y$였던 식을 2번 변환하여 복잡하게 만든 수식이다. ( $ y = a - b $ 으로 가정)</li>
</ul>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">비선형적으로 변수 간 곱셈이나 다항식을 섞으면 분석 난이도는 기하급수적으로 올라간다.</p>
<p data-ke-size="size16">$$ f = (x \oplus y) + 2(x \wedge y) + (x \vee y) \cdot (x \wedge y) - (x \wedge y)^2 - (x \wedge y) \cdot (x \oplus y) $$</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>위와 같다. 이 식은 마찬가지로 $ x + y $ 이다.</li>
</ul>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">또한, MBA의 진가는 불투명한 상수를 만드는 데에서 나온다.</p>
<p data-ke-size="size16">$$ 0 \equiv (x \vee y) - (x \wedge \neg y) - (x \oplus y) - (\neg x \wedge y) \pmod{2^n} $$</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>이는 숫자 0을 표현한 것이다.</li>
</ul>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size16">이렇게 충분히 복잡하게 설계된 MBA 식은 'NP-Hard' 문제와 유사한 수준의 분석 복잡도를 가질 수 있다.</p>
<p data-ke-size="size16">즉, 이를 단순화하는 최적의 경로를 찾는 것이 수학적으로 매우 어렵다는 뜻이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추가로 식에서 볼 수 있듯 MBA는 단순히 식을 꼬는 것이 아닌 Modulo $ 2^n $ 위에서 작동한다.</p>
<p data-ke-size="size16">이것이 가능한 이유는 컴퓨터의 $ n $-비트 연산이 수학적으로 가환환 $ \mathbb{Z}_{2^n} $ 을 형성하기 때문이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">환(Ring)의 성질로는 $ \mathbb{Z}_{2^n} $ 집합 내에서는 덧셈과 곱셈이 정의되며 분배법칙이 성립하는데,</p>
<p data-ke-size="size16">MBA는 이 환 위에서 산술 연산과 비트 연산이 서로 다른 형태의 다항식으로 표현될 수 있다는 점을 이용한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">군(Group)과의 관계로는 비트 연산 등은 그 자체로 불 군(Boolean Group)을 형성하는데,</p>
<p data-ke-size="size16">MBA는 산술 환과 불 군이라는 두 가지 서로 다른 대수 구조를 하나로 융합하여, 어느 한 쪽의 법칙만으로는 식을 단순화할 수 없게 만든다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">결론적으로, MBA는 Ring of Integers 이론에 기반한 견고한 난독화 기법중 하나이다.</p>
<p data-ke-size="size16">하지만!!</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-origin-width="1000" data-origin-height="753"><span data-url="/assets/posts/obfuscation-101-mba-obfuscation/img2.png" data-phocus="/assets/posts/obfuscation-101-mba-obfuscation/img2.png"><img src="/assets/posts/obfuscation-101-mba-obfuscation/img2.png" loading="lazy" width="480" height="361" data-origin-width="1000" data-origin-height="753"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">완벽한 방어는 불가능하듯 이를 해독 및 복호하는 방법또한 존재한다.</p>
<p data-ke-size="size16"><br />여러가지 방법이 있겠지만 대표적으로 <b><code>Z3 Solver</code></b> 로 해제하는 방법의 원리를 간단히 설명해 보겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b><code>Z3 Solver</code></b> 은 마이크로소프트 연구소에서 개발한 SMT Solver로, 수많은 제약 조건과 수식을 입력하면, 그 조건을 만족하는 해가 있는지 없는지 판별하고, 식을 정리해 주는 도구이다.</p>
<p data-ke-size="size16">MBA 해독 시의 Z3 작동 원리는</p>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>기호화 - 변수 $ x, y $를 숫자가 아닌 기호(Symbol)로 정의한다.</li>
<li>수식 입력 - MBA 식을 Z3의 형식에 맞춰 입력.</li>
<li>단순화 - Z3의 <code>simplify()</code> 엔진이 환과 불 대수의 법칙을 적용하여 불필요한것들을 없앰.</li>
<li>검증 - 모든 식에 대해 참인지 물었을 때에 Z3가 <code>sat</code> 이라 답하면 이 식은 완벽하게 풀린 것이다.</li>
</ol>
<p data-ke-size="size16">이상으로 간단히 정리한 MBA Obfuscation에 대해 알아보았다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-origin-width="100" data-origin-height="100"><span data-url="/assets/posts/obfuscation-101-mba-obfuscation/img3.png" data-phocus="/assets/posts/obfuscation-101-mba-obfuscation/img3.png"><img src="/assets/posts/obfuscation-101-mba-obfuscation/img3.png" loading="lazy" width="100" height="100" data-origin-width="100" data-origin-height="100"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">다음으론 Code Virtualization에 대해 글을 써보겠다</p>
