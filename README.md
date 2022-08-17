# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 프로젝트 설치 및 실행
```
// 라이브러리 설치
yarn
// 프로젝트 실행
yarn start
```

## 데모 링크
https://main.d2rs2fzj39ia0m.amplifyapp.com/

테스트 계정
```
아이디 : tnseoqkfqkekr@test.com
비밀번호 : 12345678
```

## 프로젝트 결과물
### 로그인
![localhost_3002_](https://user-images.githubusercontent.com/61589338/185160307-3cae4a6f-62ff-4714-8a0a-9d987c0f997c.png)
### 회원가입
![localhost_3002_join](https://user-images.githubusercontent.com/61589338/185160621-fbaf233a-6e03-4225-8f3d-df13ae439326.png)
### TodoList
![localhost_3002_ (1)](https://user-images.githubusercontent.com/61589338/185160696-3d4daebe-4693-46c3-8f30-f52bab01b2aa.png)


## 기술 스택
* React
* Typescript
  * 타입기반의 안전한 프로그래밍을 위해 적용하였습니다.
* Axios
  * REST API 서버와의 통신하기 위해 error handleing, interceptor 기능이 있는 Axios를 사용하였습니다.
* Tanstack React-Query,
  * 데이터 캐싱 및 전역으로 Server State를 관리하기 위해 React-Query를 적용했습니다.
* Styled Component
  * 컴포넌트 스타일을 위해 적용했습니다.  

## 과제 구현 내용  

## 1. 로그인 / 회원가입
  - [x] / 경로에 로그인 / 회원가입 기능을 개발해주세요
  - [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
  - [x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.
### Assignment1
  - [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: @ 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
### Assignment2
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요
### Assignment3
  - [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요
## 2. 투두 리스트
### Assignment4
  - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요
### Assignment5
  - [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

## 폴더 구조

```
|   .eslintrc
|   .gitignore
|   .prettierrc
|   package.json
|   README.md
|   test.txt
|   tsconfig.json
|   yarn.lock
|   
\---src
    |   App.tsx
    |   index.css
    |   index.tsx
    |   react-app-env.d.ts
    |   
    +---api
    |   |   custom-fetch.ts
    |   |   endpoints.ts
    |   |   
    |   +---Auth
    |   |       auth.ts
    |   |       types.ts
    |   |       
    |   \---Todos
    |           todos.ts
    |           types.ts
    |           
    +---common
    |   +---components
    |   |   +---button
    |   |   |       ButtonBasic.tsx
    |   |   |       ButtonLogOut.tsx
    |   |   |       
    |   |   +---error-loading
    |   |   |       ErrorBoundary.tsx
    |   |   |       LoadingAndError.tsx
    |   |   |       
    |   |   +---helmet
    |   |   |       TitleHelmet.tsx
    |   |   |       
    |   |   +---icons
    |   |   |       IconCheckBoxChecked.tsx
    |   |   |       IconCheckBoxEmpty.tsx
    |   |   |       
    |   |   \---input
    |   |           InputBasic.tsx
    |   |           InputCheckbox.tsx
    |   |           InputLabel.tsx
    |   |           
    |   \---constants
    |           regex.ts
    |           
    +---persistStore
    |       persistStore.ts
    |       
    +---reactQuery
    |       reactQuery.ts
    |       
    +---screens
    |   |   routes.ts
    |   |   
    |   +---login
    |   |   |   LoginScreen.tsx
    |   |   |   
    |   |   +---hooks
    |   |   |       useLogin.ts
    |   |   |       
    |   |   \---template
    |   |           LoginFormError.tsx
    |   |           LoginFormLoading.tsx
    |   |           LoginFormTemplate.tsx
    |   |           
    |   +---sign-up
    |   |   |   SignUpScreen.tsx
    |   |   |   
    |   |   +---hooks
    |   |   |       useSignUp.ts
    |   |   |       
    |   |   \---template
    |   |           SignUpFormError.tsx
    |   |           SignUpFormLoading.tsx
    |   |           SignUpFormTemplate.tsx
    |   |           
    |   \---todo
    |       |   TodoScreen.tsx
    |       |   
    |       +---component
    |       |       TodoEditForm.tsx
    |       |       TodoListCard.tsx
    |       |       TodoListCheckBox.tsx
    |       |       TodoWriteForm.tsx
    |       |       
    |       +---hooks
    |       |       useCreateTodo.ts
    |       |       useDeleteTodo.ts
    |       |       useGetTodos.ts
    |       |       useUpdateTodo.ts
    |       |       
    |       \---template
    |               TodoListError.tsx
    |               TodoListLoading.tsx
    |               TodoListTemplate.tsx
    |               TodoWriteTemplate.tsx
    |               
    +---style
    |       theme.ts
    |       
    +---types
    |       styled-component.d.ts
    |       
    \---utils
        \---hooks
                useEmailValid.ts
                useInput.ts
                usePasswordValid.ts
                
```