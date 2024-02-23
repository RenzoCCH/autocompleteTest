# 1. What is the difference between Component and PureComponent? Give
# an example where it might break my app.
A pure component will follow these fules:
- Given an input will always have the same output in this case the same React elements.
- I will not have side effects, meaning calling to external apis like Fetch among others.

# 2. Context + ShouldComponentUpdate might be dangerous. Why is that?
React Context is build in such a way that it will trigger a rerender on the consumer whenever one of its values changes.
This rerender will even if you are using useMemo(), or memoization techniques, so we have to be careful when using Context.
Regarding the ShouldComponentUpdate I have done a test, and it is preventing a rerendering when using context, so it would work.
# 3. Describe 3 ways to pass information from a component to its PARENT.
- You can pass a function to the children and then retrieve the data through the function, this is a common pattern in React (Prop drilling).
- You can use the native React Context.
- You can use external libraries like Redux, Mobx among others.
# 4. Give 2 ways to prevent components from re-rendering.
- ShouldComponenUpdate or memo.
- You can also use hooks like useMemo, useRef, useCallback, to prevent unnecessary rerendering.
# 5. What is a fragment and why do we need it? Give an example where it might
# break my app.
JSX, in the end is translated to JS basically using the createElement function, every jsx element will call this function. for example if you render: 
`<div>1</div><div>2</div>`
will call:
`createElement('div',null,'1')createElement('div',null,'2')`
This is a JS syntax error.
React Fragment solves this by wrapping it.
`<><div>1</div><div>2</div></>`
the js translation would be similar to:
`createElement(null,null,createElement('div',null,'1'),createElement('div',null,'2'))`
# 6. Give 3 examples of the HOC pattern.
- React Composition pattern.
- React Children property used.
- Redux Connect function. (was used with class components before redux toolkit)
# 7. What's the difference in handling exceptions in promises, callbacks
# and async...await?
The syntax, async await would have a declarative syntax easier to understant, as far as I can see async await would be synthatic sugar for Promises.
# 8. How many arguments does setState take and why is it async.
It takes two arguments:
- The object that will update the state (this will not overwrite other properties in the objet) or a function that will receive the updated state, this is mostly used to ensure react executes after all the updates registered were executed.
- The second argument is a function that will execute after the state was updated.
# 9. List the steps needed to migrate a Class to Function Component.
- Remove the class syntaxt. 
- Move all the state to use useState or useReducer hooks.
- The contructor statements. should be moved to the function body
- the componentDidMount, componentDidUpdate among all lyfecicle methos should be migrated to useEffect.
- the render method should be moved to the return statement in the function compnent.
- Remove the context when calling method or properties (this) keyword.
# 10. List a few ways styles can be used with components.
- Pure Css
- Css modules
- Sass with modules
- style property
- styled components
- Tailwind

# 11. How to render an HTML string coming from the server.

You can use the dangerouslySetInnerHTML property, be aware that you would have to sanatize the string on your own, to prevent js attacks.