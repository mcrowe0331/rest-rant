const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                   <img src="/images/BabyYoda.jpg" alt="Yoda" />
                   Photo by <a href="https://unsplash.com/@sounce_cosplay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lukas Denier</a> on <a href="https://unsplash.com/s/photos/star-war?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}
module.exports = error404
