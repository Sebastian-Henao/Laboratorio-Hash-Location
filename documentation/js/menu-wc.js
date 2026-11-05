'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">uceva-angular-taller-modulos documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-a1934f28b7a64be87a4b8e41143955b4a2581a7421bfc29393617ca6e60320e2445641c60ae9769b0476bb962a2b8ca3d383797669e2383b8b1f68ffdae08360"' : 'data-bs-target="#xs-components-links-module-AppModule-a1934f28b7a64be87a4b8e41143955b4a2581a7421bfc29393617ca6e60320e2445641c60ae9769b0476bb962a2b8ca3d383797669e2383b8b1f68ffdae08360"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a1934f28b7a64be87a4b8e41143955b4a2581a7421bfc29393617ca6e60320e2445641c60ae9769b0476bb962a2b8ca3d383797669e2383b8b1f68ffdae08360"' :
                                            'id="xs-components-links-module-AppModule-a1934f28b7a64be87a4b8e41143955b4a2581a7421bfc29393617ca6e60320e2445641c60ae9769b0476bb962a2b8ca3d383797669e2383b8b1f68ffdae08360"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleMarvelRivalsModule.html" data-type="entity-link" >ModuleMarvelRivalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ModuleMarvelRivalsModule-eb705a763fcf2b40c13e732ffd7ec97e4ccc4c230020514807c9bbfe1bc5f21bb338882b838e7e0a358d82ba66a80d841b4d3ba228a198efd624a7519c3dd751"' : 'data-bs-target="#xs-components-links-module-ModuleMarvelRivalsModule-eb705a763fcf2b40c13e732ffd7ec97e4ccc4c230020514807c9bbfe1bc5f21bb338882b838e7e0a358d82ba66a80d841b4d3ba228a198efd624a7519c3dd751"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModuleMarvelRivalsModule-eb705a763fcf2b40c13e732ffd7ec97e4ccc4c230020514807c9bbfe1bc5f21bb338882b838e7e0a358d82ba66a80d841b4d3ba228a198efd624a7519c3dd751"' :
                                            'id="xs-components-links-module-ModuleMarvelRivalsModule-eb705a763fcf2b40c13e732ffd7ec97e4ccc4c230020514807c9bbfe1bc5f21bb338882b838e7e0a358d82ba66a80d841b4d3ba228a198efd624a7519c3dd751"' }>
                                            <li class="link">
                                                <a href="components/ListModuleMarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListModuleMarvelRivalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarvelRivalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableModuleMarvelRivalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableModuleMarvelRivalsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModuleMarvelRivalsRoutingModule.html" data-type="entity-link" >ModuleMarvelRivalsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-cd97f791d5d1449cb0cfbd81742dcd65bc9561cd82c78197f62336c07da288cc1e0941f85f4d2f594fb44735313651c00c6f4973d5e838ecdd2f5bf85a45a107"' : 'data-bs-target="#xs-components-links-module-SharedModule-cd97f791d5d1449cb0cfbd81742dcd65bc9561cd82c78197f62336c07da288cc1e0941f85f4d2f594fb44735313651c00c6f4973d5e838ecdd2f5bf85a45a107"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-cd97f791d5d1449cb0cfbd81742dcd65bc9561cd82c78197f62336c07da288cc1e0941f85f4d2f594fb44735313651c00c6f4973d5e838ecdd2f5bf85a45a107"' :
                                            'id="xs-components-links-module-SharedModule-cd97f791d5d1449cb0cfbd81742dcd65bc9561cd82c78197f62336c07da288cc1e0941f85f4d2f594fb44735313651c00c6f4973d5e838ecdd2f5bf85a45a107"' }>
                                            <li class="link">
                                                <a href="components/BadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ModuleMarvelRivalsService.html" data-type="entity-link" >ModuleMarvelRivalsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MarvelRivals.html" data-type="entity-link" >MarvelRivals</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});