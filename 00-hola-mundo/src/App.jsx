import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'scdm97',
        name: 'Sergio Calderón De Miguel',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    }
]

export function App () {
    const formatUserName = (userName) => `@${userName}`

    // const formattedUserName=(<span>@midudev</span>)
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={userName}
                            formatUserName={formatUserName}
                            userName={userName}
                            initialIsFollowing={ isFollowing }>
                            { name }
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}