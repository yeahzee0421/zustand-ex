## ZUSTAND + TS
**reference**
- [zustand 상태 관리](https://www.nextree.io/zustand/)
- [Zustand - Complete Tutorial](https://www.youtube.com/watch?v=_ngCLZ5Iz-0&t=520s)

---

**Two BEST practices in Zustand**
1. Whenever accessing a piece of State we've done function or anywhere, always want to try to be as specific as possible and only access the thing that I need.
<br>
`const count = useCounterStore((state) => state.count); `
<br>
`const {count} = useCounterStore((state) => state); `
first one is better. 
<br>
If I give it STATE, this component is now going to listen to this entire State and re-render anything in it changes.
지금은 count의 값만 변경되지만 variables가 많아질 경우에 위 예시에서 2번 코드를 사용하게 되면 계속해서 리렌더링 되기 때문에 비효율적일 것이다.

2. Whenever definig store, always group them by specific features.
만약 features가 많아지게되면 seperate files로 store를 나누는 것이 more modular하다. And import it from that specific store.
It is easy way to add more functionality to app.