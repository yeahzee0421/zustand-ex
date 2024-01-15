# ⚙️ZUSTAND + TS
🔍GoGo(oﾟvﾟ)ノ

## 📌PROCESS
1. <code>create</code>로 zustand 불러온 후 <code>useStore</code> hook 사용하여 store 생성
``` javascript
// store.js

import { create } from 'zustand' // create로 zustand를 불러옵니다.

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore
```

2. store에서 생성한 useState 불러와서 사용하기
``` javascript
// store.js

import { create } from 'zustand' // create로 zustand를 불러옵니다.

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore
```
✅<code>Redux DevTools</code>로 store 상태 확인 가능

``` javascript
// store.js

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
})

const useStore = create(devtools(store))

export default useStore
```
✅디버깅 개발 중 / 배포 분기처리
``` javascript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
})

const useStore = create(
  process.env.NODE_ENV !== 'production' ? devtools(store) : store
)

export default useStore
```

## ✨Two BEST practices in Zustand 
- Whenever accessing a piece of State we've done function or anywhere, always want to try to be as specific as possible and only access the thing that I need.
  - <code>const count = useCounterStore((state) => state.count);</code>
  - <code>const {count} = useCounterStore((state) => state);</code>

  If I give it **STATE**, this component is now going to listen to this entire State and re-render anything in it changes.
지금은 count의 값만 변경되지만 variables가 많아질 경우에 위 예시에서 2번 코드를 사용하게 되면 계속해서 리렌더링 되기 때문에 비효율적일 것이다.

- Whenever defining store, always group them by specific features.

  만약 features가 많아지게되면 seperate files로 store를 나누는 것이 more modular하다.
  And import it from that specific store. It is easy way to add more functionality to app.

  ## ✏️reference
- [zustand 상태 관리](https://www.nextree.io/zustand/)
- [Zustand - Complete Tutorial](https://www.youtube.com/watch?v=_ngCLZ5Iz-0&t=520s)
- https://ui.toast.com/weekly-pick/ko_20210812

---
![image](https://github.com/yeahzee0421/zustand-ex/assets/107865510/b27557e2-7d76-4bf9-960f-aa8294892259)
[출처](https://ui.toast.com/weekly-pick/ko_20210812)