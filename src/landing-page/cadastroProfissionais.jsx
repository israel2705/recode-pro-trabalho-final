import { useState } from 'react';
import styles from './cadastroProfissionais.module.css';

const CadastroProfissionais = () => {
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: '',
    
    // Dados Profissionais
    profissao: '',
    especialidades: [],
    registroProfissional: '',
    tempoExperiencia: '',
    formacao: '',
    instituicaoFormacao: '',
    
    // Endereço
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    
    // Atendimento
    tipoAtendimento: [],
    valorConsulta: '',
    disponibilidade: [],
    descricao: '',
    
    // Documentos
    curriculo: null,
    certificados: null,
    foto: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const especialidadesOptions = [
    'Psicologia Clínica',
    'Psicopedagogia',
    'Terapia Ocupacional',
    'Fonoaudiologia',
    'Fisioterapia',
    'Neuropsicologia',
    'Análise do Comportamento Aplicada (ABA)',
    'Musicoterapia',
    'Psicomotricidade',
    'Educação Especial'
  ];

  const tipoAtendimentoOptions = [
    'Presencial',
    'Online',
    'Domiciliar',
    'Institucional'
  ];

  const disponibilidadeOptions = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Cadastro realizado com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '', email: '', telefone: '', cpf: '', dataNascimento: '',
        profissao: '', especialidades: [], registroProfissional: '', tempoExperiencia: '',
        formacao: '', instituicaoFormacao: '', cep: '', endereco: '', numero: '',
        complemento: '', bairro: '', cidade: '', estado: '', tipoAtendimento: [],
        valorConsulta: '', disponibilidade: [], descricao: '', curriculo: null,
        certificados: null, foto: null
      });
      setCurrentStep(1);
    } catch (error) {
      setSubmitMessage('Erro ao enviar cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className={styles.stepIndicator}>
      {[1, 2, 3, 4].map(step => (
        <div key={step} className={styles.stepIndicatorContainer}>
          <div className={`${styles.stepCircle} ${step <= currentStep ? styles.active : ''}`}>
            {step < currentStep ? '✓' : step}
          </div>
          <span className={styles.stepLabel}>
            {step === 1 && 'Dados Pessoais'}
            {step === 2 && 'Dados Profissionais'}
            {step === 3 && 'Endereço e Atendimento'}
            {step === 4 && 'Documentos'}
          </span>
          {step < 4 && <div className={`${styles.stepConnector} ${step < currentStep ? styles.completed : ''}`} />}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className={styles.stepContent}>
      <h3>Dados Pessoais</h3>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Nome Completo *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Telefone *</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="(11) 99999-9999"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>CPF *</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="000.000.000-00"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Data de Nascimento *</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.stepContent}>
      <h3>Dados Profissionais</h3>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Profissão *</label>
          <select
            name="profissao"
            value={formData.profissao}
            onChange={handleInputChange}
            className={styles.formSelect}
            required
          >
            <option value="">Selecione sua profissão</option>
            <option value="psicologo">Psicólogo</option>
            <option value="terapeuta-ocupacional">Terapeuta Ocupacional</option>
            <option value="fonoaudiologo">Fonoaudiólogo</option>
            <option value="fisioterapeuta">Fisioterapeuta</option>
            <option value="psicopedagogo">Psicopedagogo</option>
            <option value="neuropsicopedagogo">Neuropsicopedagogo</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Registro Profissional *</label>
          <input
            type="text"
            name="registroProfissional"
            value={formData.registroProfissional}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Ex: CRP 12345"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tempo de Experiência *</label>
          <select
            name="tempoExperiencia"
            value={formData.tempoExperiencia}
            onChange={handleInputChange}
            className={styles.formSelect}
            required
          >
            <option value="">Selecione</option>
            <option value="menos-1-ano">Menos de 1 ano</option>
            <option value="1-3-anos">1 a 3 anos</option>
            <option value="3-5-anos">3 a 5 anos</option>
            <option value="5-10-anos">5 a 10 anos</option>
            <option value="mais-10-anos">Mais de 10 anos</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Formação *</label>
          <input
            type="text"
            name="formacao"
            value={formData.formacao}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Ex: Graduação em Psicologia"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Instituição de Formação *</label>
          <input
            type="text"
            name="instituicaoFormacao"
            value={formData.instituicaoFormacao}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Ex: Universidade de São Paulo"
            required
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Especialidades *</label>
        <div className={styles.checkboxGrid}>
          {especialidadesOptions.map(especialidade => (
            <label key={especialidade} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="especialidades"
                value={especialidade}
                checked={formData.especialidades.includes(especialidade)}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              {especialidade}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className={styles.stepContent}>
      <h3>Endereço e Atendimento</h3>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>CEP *</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="00000-000"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Endereço *</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Número *</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Complemento</label>
          <input
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Bairro *</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Cidade *</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Estado *</label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
            className={styles.formSelect}
            required
          >
            <option value="">Selecione o estado</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="PR">Paraná</option>
            <option value="SC">Santa Catarina</option>
            {/* Adicionar outros estados */}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Valor da Consulta (R$)</label>
          <input
            type="number"
            name="valorConsulta"
            value={formData.valorConsulta}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="150.00"
          />
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Tipo de Atendimento *</label>
        <div className={styles.checkboxGrid}>
          {tipoAtendimentoOptions.map(tipo => (
            <label key={tipo} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="tipoAtendimento"
                value={tipo}
                checked={formData.tipoAtendimento.includes(tipo)}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              {tipo}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Disponibilidade *</label>
        <div className={styles.checkboxGrid}>
          {disponibilidadeOptions.map(dia => (
            <label key={dia} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="disponibilidade"
                value={dia}
                checked={formData.disponibilidade.includes(dia)}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              {dia}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Descrição do Atendimento</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleInputChange}
          className={styles.formTextarea}
          rows="4"
          placeholder="Descreva sua abordagem terapêutica, experiência com TEA e diferenciais do seu atendimento..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className={styles.stepContent}>
      <h3>Documentos</h3>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Foto de Perfil</label>
          <input
            type="file"
            name="foto"
            onChange={handleFileChange}
            className={styles.formFile}
            accept="image/*"
          />
          <small className={styles.fileHint}>Formatos aceitos: JPG, PNG (máx. 2MB)</small>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Currículo *</label>
          <input
            type="file"
            name="curriculo"
            onChange={handleFileChange}
            className={styles.formFile}
            accept=".pdf,.doc,.docx"
            required
          />
          <small className={styles.fileHint}>Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)</small>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Certificados e Diplomas</label>
          <input
            type="file"
            name="certificados"
            onChange={handleFileChange}
            className={styles.formFile}
            accept=".pdf,.jpg,.png"
            multiple
          />
          <small className={styles.fileHint}>Formatos aceitos: PDF, JPG, PNG (máx. 10MB total)</small>
        </div>
      </div>
      
      <div className={styles.termsSection}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            required
            className={styles.checkbox}
          />
          Aceito os <a href="#" className={styles.link}>Termos de Uso</a> e a <a href="#" className={styles.link}>Política de Privacidade</a>
        </label>
      </div>
    </div>
  );

  return (
    <div className={styles.cadastroPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Cadastro de Profissionais</h1>
          <p>Junte-se à nossa rede de especialistas em TEA</p>
        </div>

        {renderStepIndicator()}

        <form onSubmit={handleSubmit} className={styles.form}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          <div className={styles.formActions}>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Voltar
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.btn} ${styles.btnPrimary} ${isSubmitting ? styles.loading : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Finalizar Cadastro'}
              </button>
            )}
          </div>
        </form>

        {submitMessage && (
          <div className={`${styles.message} ${submitMessage.includes('sucesso') ? styles.success : styles.error}`}>
            {submitMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default CadastroProfissionais;

