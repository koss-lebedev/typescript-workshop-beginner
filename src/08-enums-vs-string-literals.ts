type RouteType = '/' | '/signup' | '/signin'

enum RoutePath {
  Home = '/',
  Signup = '/signup',
  Signin = '/signin',
}

const redirectTo = (url: RouteType) => ({
  // redirect logic here...
})

const signupPath = '/signup'

