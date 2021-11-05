import React from 'react';

import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
    context('정상적으로 작동할 때', () => {
        it('화면에 하이를 보여준다.', () => {
            const { container } = render(<App />)
            console.log(container.innerHTML)
            expect(container.querySelector('div')).toBeInTheDocument()
        })
    })
})