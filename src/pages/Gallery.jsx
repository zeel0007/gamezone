import React from 'react';

const Gallery = () => {
    return (
        <main>
            <header className="page-header reveal" style={{ padding: '150px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Photo <span className="text-gradient">Library</span></h1>
                </div>
            </header>

            <section className="py-5">
                <style>{`
                    .gallery-item {
                        position: relative;
                        border-radius: 15px;
                        overflow: hidden;
                        aspect-ratio: 4/3;
                        cursor: pointer;
                    }

                    .gallery-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.5s ease;
                    }

                    .gallery-overlay {
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background: linear-gradient(to top, rgba(255,0,127,0.8), transparent);
                        opacity: 0;
                        display: flex;
                        align-items: flex-end;
                        padding: 20px;
                        transition: opacity 0.3s ease;
                    }

                    .gallery-overlay h3 {
                        color: #fff;
                        transform: translateY(20px);
                        transition: transform 0.4s ease;
                    }

                    .gallery-item:hover .gallery-img { transform: scale(1.1); }
                    .gallery-item:hover .gallery-overlay { opacity: 1; }
                    .gallery-item:hover .gallery-overlay h3 { transform: translateY(0); }
                `}</style>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div className="gallery-item reveal"><img src="/assets/images/hero.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>Main Arena</h3></div></div>
                    <div className="gallery-item reveal" style={{ transitionDelay: '0.1s' }}><img src="/assets/images/bowling.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>Neon Bowling</h3></div></div>
                    <div className="gallery-item reveal" style={{ transitionDelay: '0.2s' }}><img src="/assets/images/trampoline.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>Trampoline Park</h3></div></div>
                    <div className="gallery-item reveal"><img src="/assets/images/arcade.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>Retro Arcade</h3></div></div>
                    <div className="gallery-item reveal" style={{ transitionDelay: '0.1s' }}><img src="/assets/images/hero.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>Kids Zone</h3></div></div>
                    <div className="gallery-item reveal" style={{ transitionDelay: '0.2s' }}><img src="/assets/images/arcade.png" className="gallery-img" alt="" /><div className="gallery-overlay"><h3>VR Setup</h3></div></div>
                </div>
            </section>
        </main>
    );
};

export default Gallery;
