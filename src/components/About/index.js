import { useEffect } from 'react'
import './index.scss'
import { animate, createTimeline, stagger, text, utils } from "https://esm.sh/animejs@4.1.1";

const About = () => {
    useEffect(() => {
        const coords = [];
        const [ $split ] = utils.$('#split');
        const [ $reorder ] = utils.$('#reorder');
        const [ $debug ] = utils.$('#debug');

        if ( !$split || !$reorder || !$debug) return; // Prevent errors if elements not found

        $split.disabled = false;
        $reorder.disabled = true;

        let split;

        const splitAndAnimate = () => {
            $split.disabled = true;

            split = text.split('p', {
                lines: true,
            });

            split.addEffect(split => {
                return createTimeline({
                    defaults: {
                        alternate: true,
                        loop: true,
                        loopDelay: 75,
                        duration: 1500,
                        ease: 'inOutQuad',
                    },
                })
                .add(split.lines, {
                    y: 0,
                    scale: 1,
                }, stagger(0, { start: 0 }))
                .add(split.words, {
                    scale: [1, 1],
                }, stagger(100, { use: 'data-line', start: 0 }))
                .init()
            });

            split.addEffect(split => {
                split.words.forEach(($el, i) => {
                    const c = coords[i];
                    if (c) utils.set($el, { x: c.x, y: c.y });
                    $el.addEventListener('pointerenter', () => {
                        $reorder.disabled = false;
                        animate($el, {
                            x: utils.random(-50, 50),
                            y: utils.random(-50, 50),
                        })
                    });
                });
                return () => {
                    split.words.forEach((w, i) => coords[i] = { x: utils.get(w, 'x'), y: utils.get(w, 'y') });
                }
            });
        }

        splitAndAnimate();


        $split.addEventListener('click', splitAndAnimate);

        $reorder.addEventListener('click', () => {
            animate(split.words, {
                x: 0, y: 0, ease: 'inOutExpo'
            });
            $reorder.disabled = true;
        });

        $debug.addEventListener('click', () => {
            split.debug = !split.debug;
            split.refresh();
            $debug.innerText = split.debug ? 'HIDE DEBUG' : 'SHOW DEBUG';
        });

        // Optional: cleanup listeners on unmount
        return () => {
            $split.removeEventListener('click', splitAndAnimate);
            $reorder.removeEventListener('click', splitAndAnimate);
            $debug.removeEventListener('click', splitAndAnimate);
        };
    }, []);

    return (
        <div className='about-page'>
            <div className='padding-global'>
                <div className='about-hero'>
                    <p className='about-text'>
                        Wave propagation and fluid dynamics encompass several interconnected physical phenomena that govern how water moves through oceanic systems, demonstrating the fundamental principles of energy transfer and momentum conservation. Wave "continuation" describes how energy persists through water long after the initial disturbance has passed, with individual water particles following elliptical orbital paths that decrease in amplitude with depth, creating the illusion of forward motion while actually moving in circular patterns. "Differential flow" occurs because various layers of water move at different velocities—surface currents respond to wind stress differently than deeper thermohaline circulation, and coastal waters behave distinctly from open ocean systems. A related phenomenon is "hydrodynamic lag," where water masses respond gradually to driving forces, whether from atmospheric pressure, gravitational pull, or temperature gradients. This lag affects everything from floating objects like debris and marine organisms to distinct water bodies themselves, such as upwelling zones and convergence areas. In oceanic circulation, deep water acts as the primary driver, with surface waves, spray, and foam representing secondary responses to local conditions. Water masses with different densities, such as warm surface layers and cold deep currents, or areas with varying salinity, exhibit more independent behavior than uniform water columns. Extreme manifestations of these forces create phenomena like rogue waves and storm surges, while calmer conditions require precise balance between competing forces to maintain stable patterns. Even apparently static water bodies demonstrate constant motion through molecular vibration, thermal convection, and microscopic currents that prevent true stagnation and maintain the ocean's dynamic equilibrium.
                    </p>
                    <fieldset>
                        <button id="split" className='none'>SPLIT UP</button>
                        <button id="reorder">REORGANIZE</button>
                        <button id="debug">DEBUG MODE</button>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default About