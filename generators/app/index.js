'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.appname = this.appname.replace(/ /g, '.');

    this.log(
      yosay(
        'Welcome to the cool ' + chalk.red('generator-easynvest-react') + ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'Would you like to create a folder to project?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'context',
        message: 'Informe o contexto da aplicação em produção',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Informe uma breve descrição para o projeto',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    if (this.appname !== this.props.appname) {
      this.destinationRoot(`./${this.props.appname}`);
    }

    this._writingPackage();
    this._writingReadme();
    this._writingJsConfig();
    this._writingGitIgnore();
    this._writingEnv();
    this._writingEnvProd();
    this._writingEditorConfig();
    this._writingBabelRc();
    this._writingEslint();
    this._writingIndexHtml();
    this._writingFavicon();
    this._writingManifest();
    this._writingSrcFiles();
    this._writingE2e();
    this._writingDockerfile();
    this._writingNginx();

    this.composeWith(require.resolve('generator-git-init'));
  }

  install() {
    this.installDependencies({ bower: false });
  }

  _writingPackage() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.appname,
        description: this.props.description
      }
    );
  }

  _writingReadme() {
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name: this.props.appname,
      description: this.props.description
    });
  }

  _writingIndexHtml() {
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      {
        name: this.props.appname
      }
    );
  }

  _writingEnvProd() {
    this.fs.copyTpl(
      this.templatePath('env.production'),
      this.destinationPath('.env.production'),
      {
        context: this.props.context
      }
    );
  }

  _writingJsConfig() {
    this.fs.copy(
      this.templatePath('jsconfig.json'),
      this.destinationPath('jsconfig.json')
    );
  }

  _writingGitIgnore() {
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
  }

  _writingEnv() {
    this.fs.copy(this.templatePath('env'), this.destinationPath('.env'));
  }

  _writingEditorConfig() {
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
  }

  _writingBabelRc() {
    this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'));
  }

  _writingSrcFiles() {
    this._writingSetupTests();
    this._writingServiceWorker();
    this._writingLogo();
    this._writingApp();
    this._writingIndexBootstrapApp();
    this._writingStoreIndex();
    this._writingStoreRootReducer();
  }

  _writingSetupTests() {
    this.fs.copy(
      this.templatePath('src/setupTests.js'),
      this.destinationPath('src/setupTests.js')
    );
  }

  _writingServiceWorker() {
    this.fs.copy(
      this.templatePath('src/registerServiceWorker.js'),
      this.destinationPath('src/registerServiceWorker.js')
    );
  }

  _writingLogo() {
    this.fs.copy(this.templatePath('src/logo.png'), this.destinationPath('src/logo.png'));
  }

  _writingApp() {
    this.fs.copyTpl(this.templatePath('src/App.js'), this.destinationPath('src/App.js'), {
      name: this.props.appname
    });

    this.fs.copyTpl(
      this.templatePath('src/App.test.js'),
      this.destinationPath('src/App.test.js'),
      {
        name: this.props.appname
      }
    );
  }

  _writingIndexBootstrapApp() {
    this.fs.copy(this.templatePath('src/index.js'), this.destinationPath('src/index.js'));
  }

  _writingStoreIndex() {
    this.fs.copy(
      this.templatePath('src/store/index.js'),
      this.destinationPath('src/store/index.js')
    );
  }

  _writingStoreRootReducer() {
    this.fs.copy(
      this.templatePath('src/store/rootReducer.js'),
      this.destinationPath('src/store/rootReducer.js')
    );
  }

  _writingFavicon() {
    this.fs.copy(
      this.templatePath('public/favicon.ico'),
      this.destinationPath('public/favicon.ico')
    );
  }

  _writingManifest() {
    this.fs.copyTpl(
      this.templatePath('public/manifest.json'),
      this.destinationPath('public/manifest.json'),
      {
        name: this.props.appname
      }
    );
  }

  _writingEslint() {
    this.fs.copy(this.templatePath('eslintrc'), this.destinationPath('.eslintrc'));

    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
  }

  _writingE2e() {
    this._writingE2eProtractor();
    this._writingE2eFeatureSample();
    this._writingE2eLocatorsSample();
    this._writingE2eVariables();
    this._writingE2eReports();
  }

  _writingE2eProtractor() {
    this.fs.copy(
      this.templatePath('protractor.conf.js'),
      this.destinationPath('protractor.conf.js')
    );
  }

  _writingE2eFeatureSample() {
    this.fs.copy(
      this.templatePath('e2e/features/sample.feature'),
      this.destinationPath('e2e/features/sample.feature')
    );
  }

  _writingE2eLocatorsSample() {
    this.fs.copy(
      this.templatePath('e2e/locators/app.json'),
      this.destinationPath('e2e/locators/app.json')
    );
  }

  _writingE2eVariables() {
    this.fs.copy(
      this.templatePath('e2e/variables.json'),
      this.destinationPath('e2e/variables.json')
    );
  }

  _writingE2eReports() {
    this.fs.copy(
      this.templatePath('e2e/report/gitignore'),
      this.destinationPath('e2e/report/.gitignore')
    );
  }

  _writingDockerfile() {
    this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
  }

  _writingNginx() {
    this.fs.copy(this.templatePath('nginx.conf'), this.destinationPath('nginx.conf'));
  }
};
