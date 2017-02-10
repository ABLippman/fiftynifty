import React from 'react';
import { Link, browserHistory } from 'react-router';

let styles;

export const About = React.createClass({

    render() {
        return (
            <div style={styles.more}>
                <div style={styles.container}>
                    <div>
                        <h3 style={styles.title}>How to Play and Win</h3>
                        <p>This is a grassroots challenge to get friends to participate in
                            democracy by making calls to congresspeople in all 50 states.
                            <a href="#calls">Live phone calls</a> are the best way to directly
                            express your opinion on an issue to your elected officials.
                            Your mission is to pass this along to friends who will make calls
                            and also pass the message/link along to others who will do the same.
                            It's a social chain letter and a call to action for a better participatory
                            democracy.  Call and tell others to do the same.
                            We’ll help you make the call and express your message.
                        </p>
                        <p>
                            The winners are the first ten chains to reach 50 states and
                            accumulate the most challenge points.  You get 250 points for making a call,
                            125 points for a call that your friend makes, 65 points for the call their
                            friend makes, on and on.  Everyone on the chain earns points.  Points count
                            for your first call to each of your two senators and your representative.
                            You get a bonus for a &quotgrand slam&quot -- a network that reaches all 435
                            representatives and 100 senators.
                        </p>
                        <p>
                            There is a leaderboard and a network view so you can
                            track how you are doing. You can also see how much of the
                            country your chain is covering. If you like, we will send
                            you a progress text each morning.
                        </p>
                        <p>Join by telling us your name or nickname,
                            your zip code and your phone number.
                            We'll figure out your Congresspeople.
                            We'll also connect you to them and register your points for the call.
                            You can call now or later -- its easy:
                            press the "call" button and we'll call you back and patch
                            you directly to their office.  Just answer the phone to talk.
                            Touch <a href="#hints" >here</a> for hints about what to say.</p>
                        <p>
                            This is an MIT Media Lab research experiment being done by
                            Andrew Lippman in the Viral Communications Group to
                            understand and encourage the propagation of
                            social activities through personal networks.
                            Your participation is voluntary and there is no compensation for joining.
                            Normal phone charges may apply.
                            We will not use any personally identifiable information
                            in our research.
                            Anything you enter will be encrypted before storage.
                            We ask that you use a name or nickname so that people you
                            invite can see who it came from.
                            We also use your name so you can track the
                            progress of your network on the map. You have the option of
                            supressing that information.  We will never present results of our
                            research in a way that allows you to be identified and we will destroy
                            any personal information at the conclusion of the challenge.
                        </p>
                        <p>We welcome your feedback: <a href={'mailto:fiftynifty@media.mit.edu'} style={styles.link}>Contact us at fiftynifty@media.mit.edu</a>
                        </p>
                        <div>
                            <Link to={"/"}><button className={"pt-button pt-intent-primary pt-fill"}>Join The Game</button></Link>
                        </div>
                        <div>
                            As you invite more friends to the game - your network will grow will look similar to this:
                            <div style={{width:'100%', textAlign:'center'}}><img style={{width:'90%'}} src={'static/network.png'}/></div>
                        </div>
                        <div>
                            And as your friends make calls and invite more friends, your progress map will start looking like this:
                            <div style={{width:'100%', textAlign:'center'}}><img style={{width:'90%'}} src={'static/map.png'}/></div>

                        </div>
                    </div>
                    <div>

                        <h3 style={styles.title}> Hints and a guide</h3>
                        <p>To play, sign up, make calls, and pass the ball to friends by sending them the invitation link.  You should tell them what to expect when they follow the link, and suggest that they do it on their phone.  We have presented an issue we think is important, but you are welcome to encourage your friends to call about <em>any</em> issue they care about.</p>
                        <p>When you hit the call button on your phone, we will call your congressperson and ring you right back.  You will see an incoming call from a number you won't recognize.  That's just us making the connection.  We do this to keep score by knowing that you really did make the call. </p>
                        <p>When you get through, tell your Congressperson your name, that you are a consituent, and that you want to tell them your opinion on an issue.  They may ask for your address to verify that you live in their district or state.  You can tell them that you are a voter, and you can ask for them to get back to you about the issue.</p>

                    </div>

                    <div id="calls">
                        <h3 style={styles.title}>Calls Matter</h3>
                        <p> Democracy works because you elect people to act on your behalf.  Congress knows what you want by your vote, by polling, and by your telling them directly.  But they don't poll on every issue, and a poll is not as accurate as your personal expression.  You can write, email, or phone.  Of these, a live phone call from a constituent during business hours gets the most attention.  Your call will be answered, most likely by a staffer whose job is to listen.  When you talk directly to them, they report that to the congressman.  As you talk to them, your point becomes clearer.  If you leave a message, it is simply totaled and summarized.
                        </p>
                        <p>Elected officials keep a record of elegible and active voters in their district or state.  That's why you should give your name and address.  Your call demonstrates your willingness to act on your opinions.  Even if you didn't vote, you are heard because once you make the effort to call, you are more likely to make the effort to vote.
                        </p>
                        <p>When you call, you are making democracy work better, more responsibly, and more responsively.  You may worry that money counts a lot, but in the end, it's votes that actually put people in office.  The goal of this challenge is to multiply your individual message by the power of your friends, and their friends.  We want to show that a network can be more powerful than any other message they get.  A network of citizens is what democracy is all about.
                        </p>
                        <p>Calls work!  And they're easy to do.  We'll help make it even easier.</p>

                        <p>You may think that it's impossible to pass a message to someone in every state.  It's far easier than you think.  Some studies have shown that everyone is only an average of six people away from anyone else.  A psychologist <a href=  "https://en.wikipedia.org/wiki/Six_degrees_of_separation"> tested this in the 1960's by asking people to get a letter to someone they didn't know, by sending it to someone they did.</a> For a while there was a lot of buzz about your &quotBacon Number&quot.  That number told how many people you were away from Kevin Bacon.  It's also called &quotThe Small World Problem&quot.  <em>You can meet the challenge!</em></p>
                        <p>Remember the challenge!  50 calls in 50 states.  Multiplied by all of us.</p>

                        {/*Add Red Balloon challenge note*/}

                        <p>Remember the challenge! 50 calls in 50 states. Multiplied by all of us.</p>
                    </div>
                    <div>
                        <Link to={"/"}><button className={"pt-button pt-intent-primary pt-fill"}>Join Now</button></Link>
                    </div>
                    <div>
                        <h3 style={styles.title}>  Closing the Borders </h3>
                        <p> The new Executive Order has thrown us into turmoil.
                            Whether you agree with the order, are confused by it, or are think our government
                            ought to be more thoughtful in its actions, now is the time to make your opinion known by
                            <i> calling your congressman!</i></p>

                        <p>Many think the order is bad policy and bad democracy.
                            They feel that guests and immigrants make America strong,
                            increase the economy more than trade deals, and do not take American jobs.
                            Neither do immigrants from the seven proscribed countries
                            <a style={styles.link} href="https://www.nytimes.com/2017/02/07/business/economy/restricting-immigration-would-make-america-smaller-not-greater.html?ribbon-ad-idx=2&rref=business&module=Ribbon&version=origin&region=Header&action=click&contentCollection=Business%20Day&pgtype=article"> terrorize us.</a> </p>
                        <p>Many others support the ban in the interests of keeping the country safe.
                            President Trump is following through on the promise he made during the campaign.
                            Many voted for him based on his promises.</p>


                        <p>Yet others want to support the President but think that he acted rashly and might have been more circumspect
                            were his full cabinet in place to temper and fine tune his actions.</p>
                        <p>No matter what you think, now is the time to mobilize your network to make a phone call.
                            You should also consider that even if you think you vote means nothing, your call means a lot.
                            Representatives know that an active caller is a potential voter, and they count all votes.
                            And all calls.  There are only a few ways to
                            make democracy work:  voting is the broadest and most important one.
                            But calling is more specific and more immediate.
                            They can't poll or ask you about every issue, but you <em>can</em> t
                            ell them how you feel about the important ones.</p>
                    </div>
                    <div>
                        <Link to={"/"}><button className={"pt-button pt-intent-primary pt-fill"}>Join Now</button></Link>
                    </div>
                </div>
            </div> );
    }
});


export default About;

styles = {
    more: {
        backgroundColor: "#003d59",
        color: 'white',
        fontWeight: 'lighter',
    },
    container: {
        padding: 'calc(115px + 2em) 2em 3em',
        maxWidth: '1024px',
        margin: '0 auto',
        zIndex: 2,
        position: 'relative',
        display: 'block'
    },
    link: {
        color: '#ff6f70'
    },
    title: {
        fontSize: '2em',
        fontWeight: 'lighter',
        padding: '1em 0',
        color: 'white',
        letterSpacing: '0.1em',
    },
};
